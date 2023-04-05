export const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
export const PROXY_BACKEND_API_URL = import.meta.env.PROXY_BACKEND_API_URL;
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_REST_API_KEY
}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
