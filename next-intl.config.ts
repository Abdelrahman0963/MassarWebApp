import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
    if (!locale) {
        throw new Error('locale is undefined');
    }
    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});