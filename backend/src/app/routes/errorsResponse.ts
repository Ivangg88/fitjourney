/* eslint max-classes-per-file: 0 */
import { ZodIssue } from 'zod'
import { Response } from 'express'
import { HttpResponse } from './HttpResponse'

/* eslint-disable max-classes-per-file */
class DefaultError extends Error {
  public message: string
  public res: Response
  constructor(res: Response, message: string) {
    super(message)
    this.message = message
    this.res = res
  }
}

class ValidationError {
  public message: ZodIssue[]
  constructor(res: Response, message: ZodIssue[]) {
    this.message = message
    HttpResponse.BadRequest(res, message)
  }
}

class UnauthorizedError extends DefaultError {
  constructor(res: Response, message: string = 'Missing token') {
    super(res, `${message}`)
  }
}

class ForbiddenError extends DefaultError {
  constructor(res: Response, message: string = 'Forbidden') {
    super(res, `${message}`)
  }
}

class NotFoundError extends DefaultError {
  constructor(res: Response, message: string = 'Not found') {
    super(res, `${message}`)
  }
}

class DuplicateError extends DefaultError {
  constructor(res: Response, resource: string) {
    super(res, `${resource} already exists`)
  }
}

class UnsupportedMediaType extends DefaultError {
  constructor(res: Response, message?: string) {
    super(res, message ?? 'Unsupported media type')
  }
}

class MissingParamError extends DefaultError {
  constructor(res: Response, parameter: string) {
    super(res, `Missing ${parameter}`)
  }
}

class InvalidToken extends DefaultError {
  constructor(res: Response, message: string = 'Token is not valid') {
    super(res, `${message}`)
  }
}

export {
  DefaultError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  DuplicateError,
  UnsupportedMediaType,
  MissingParamError,
  InvalidToken,
}
