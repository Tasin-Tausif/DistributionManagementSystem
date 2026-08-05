export const getImageUrl = (path) => {
    if (!path) return '';

    if (/^https?:\/\//i.test(path) || path.startsWith('blob:') || path.startsWith('data:')) {
        return path;
    }

    const backend = import.meta.env.VITE_API_BASE_URL;

    return `${backend}/storage/${path}`;
};
