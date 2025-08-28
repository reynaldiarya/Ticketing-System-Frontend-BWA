// TODO: Import necessary dependencies
// Hint: You'll need pinia, axios, router, and cookies
import { defineStore } from 'pinia';
import { axiosInstance } from '@/plugins/axios';
import { handleError } from '@/helpers/errorHelper';
import router from '@/router';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        // TODO: Define your state properties
        // Hint: You'll need user, loading, error, and success states
        user: null,
        loading: false,
        error: null,
        success: null,
    }),

    getters: {
        // TODO: Implement token getter
        // Hint: Get token from cookies
        token: () => Cookies.get('token'),

        // TODO: Implement isAuthenticated getter
        // Hint: Check if user exists
        isAuthenticated: (state) => !!state.user,
    },

    actions: {
        async login(credentials) {
            // TODO: Implement login action
            // Steps:

            // 1. Set loading state
            this.loading = true;
            this.error = null;

            try {
                // 2. Make API call to login endpoint
                const response = await axiosInstance.post('/login', credentials);
                // 3. Store token in cookies
                const token = response.data.data.token;
                const user = response.data.data.user;

                Cookies.set('token', token);

                // Simpan user ke state
                this.user = user;

                this.success = response.data.data.message;

                return this.user;
                
                // 4. Handle success/error
                // if (this.user.role === 'admin') {
                //     router.push({ name: 'admin.dashboard' });
                // } else {
                //     router.push({ name: 'app.dashboard' });
                // }
            }
            catch (error) {
                // Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // Reset loading state
                this.loading = false;
            }
        },

        async register(credentials) {
            // TODO: Implement register action
            // Steps:
            this.loading = true;
            try {
                const response = await axiosInstance.post('/register', credentials);

                this.success = response.data.message;

                const token = response.data.data.token;

                Cookies.set('token', token);

                router.push ({ name: 'app.dashboard' });
            } catch (error) {
                // Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // Reset loading state
                this.loading = false;
            }
        },

        async logout() {
            // TODO: Implement logout action
            // Steps:
            this.loading = true;

            try {
                const response = await axiosInstance.post('/logout');
                // 3. Store token in cookies
                Cookies.remove('token');

                this.user = null;
                this.error = null;

                this.success = response.data.message;

                router.push({ name: 'login' });
            }
            catch (error) {
                // Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // Reset loading state
                this.loading = false;
            }
        },

        async checkAuth() {
            // TODO: Implement checkAuth action
            // Steps:
            // 1. Set loading state
            // 2. Make API call to get user data
            // 3. Update user state
            // 4. Handle unauthorized error
        }
    },
}) 