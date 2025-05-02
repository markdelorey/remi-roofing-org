import { HTTPException } from 'hono/http-exception'
import { httpStatus } from 'http-codex/status'

import type { Context } from 'hono'
import type { ContentfulStatusCode } from 'hono/utils/http-status'
import type { APIError } from '../helpers/errors'
import type { HonoApp } from '../types'

/** Handles typical onError hooks */
export function useOnError<T extends HonoApp>() {
	return async (err: Error, ctx: Context<T>): Promise<Response> => {
		const c = ctx as unknown as Context<HonoApp>

		if (err instanceof HTTPException) {
			const status = err.getResponse().status as ContentfulStatusCode
			const body: APIError = { success: false, error: { message: err.message } }
			if (status >= 500) {
				// Log to Sentry
				c.var.sentry?.withScope(async (scope) => {
					scope.setContext('HTTP Exception', {
						status: status,
						body,
					})
					c.var.sentry?.captureException(err)
				})
			} else if (status === httpStatus.Unauthorized) {
				body.error.message = 'unauthorized'
			}

			return c.json(body, status)
		}

		// Log all other error types to Sentry
		c.var.sentry?.captureException(err)
		console.error(err)
		return c.json(
			{
				success: false,
				error: { message: 'internal server error' },
			} satisfies APIError,
			500
		)
	}
}
