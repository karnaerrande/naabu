export function getSession(request) {
	return {
		environment: process.env['ENVIRONMENT'],
	};
}

export const handle = async ({ request, resolve }) => {
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}
	const response = await resolve(request);
	return response;
};
