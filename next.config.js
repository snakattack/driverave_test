module.exports = {
	basePath: process.env.NODE_ENV === 'production' ? '/driverave_test' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/driverave_test/' : '',
  output: "export",
  images: {
    unoptimized: true,
		path: process.env.NODE_ENV === 'production' ? '/driverave_test/_next/image' : '/',
  },
};
