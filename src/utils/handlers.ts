export const wrapAsyn = (func: any) => {
  return async (req: any, res: any, next: any) => {
    try {
      await func(req, res, next).catch(next)
    } catch (err) {
      next(err)
    }
  }
}
