// TODO: Import necessary dependencies
// Hint: You'll need pinia, axios, and error helper
import { defineStore } from 'pinia';
import { axiosInstance } from '@/plugins/axios';
import { handleError } from '@/helpers/errorHelper';

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
        // TODO: Define your state properties
        // Hint: You'll need statistic, loading, error, and success states
        statistic: null,
        loading: false,
        error: null,
        success: null
    }),

    actions: {
        async fetchStatistics() {
            // TODO: Implement fetchStatistics action
            // Steps:
            // 1. Set loading state
            this.loading = true;
            // 2. Make API call to statistics endpoint
            try {
                const response = await axiosInstance.get('dashboard');

                this.statistic = response.data.data;
            } catch (error) {
                // 3. Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // 4. Reset loading state
                this.loading = false;
            }
        }
    }
})