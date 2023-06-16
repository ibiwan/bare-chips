export const debugExpress = (req, _res, next) => {
  console.debug('\n*u+m: ', req.url, req.method);

  if (req?.body?.operationName) {
    console.debug(
      '*op: ',
      req?.body?.operationName,
      //     '  q: ',
      //     req?.body?.query,
      //     '  v: ',
      //     req?.body?.variables,
    );
  }

  // const auth = req.header('Authorization');
  // console.debug('  ', { auth });

  // console.debug('next!');
  next();
};
