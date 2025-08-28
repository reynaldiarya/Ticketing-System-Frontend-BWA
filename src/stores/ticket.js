// TODO: Import necessary dependencies
// Hint: You'll need pinia, axios instance, error helper, and router
import { defineStore } from 'pinia';
import { axiosInstance } from '@/plugins/axios';
import { handleError } from '@/helpers/errorHelper';
import router from '@/router';

export const useTicketStore = defineStore("ticket", {
    state: () => ({
        // TODO: Define your state properties
        // Hint: You'll need tickets array, loading, error, and success states
        tickets: [],
        loading: false,
        error: null,
        success: null,
    }),

    actions: {
        async fetchTickets(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`ticket`, { params });

                this.tickets = response.data.data;
            } catch (error) {
                // Handle error using handleError helper
                this.error = handleError(error);
            }   finally {
                // Reset loading state
                this.loading = false;
            }
        },

        async fetchTicket(code) {
            // TODO: Implement fetchTicket action
            // Steps:
            // 1. Set loading state
            this.loading = true;
            // 2. Make API call to get ticket details
            try {
                const response = await axiosInstance.get(`ticket/${code}`);
                // 3. Return ticket data
                return response.data.data;
            } catch (error) {
                // 4. Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // 5. Reset loading state
                this.loading = false;
            }
            // 3. Return ticket data
            // 4. Handle error
            // 5. Reset loading state
        },

        async createTicket(payload) {
            // TODO: Implement createTicket action
            // Steps:
            // 1. Set loading state
            this.loading = true;
            // 2. Make API call to create ticket
            try {
                const response = await axiosInstance.post('ticket', payload);
                // 3. Set success message
                this.success = response.data.message;
                // 4. Redirect to dashboard
                router.push({ name: 'app.dashboard' });
            } catch (error) {
                // 5. Handle error using handleError helper
                this.error = handleError(error);
            } finally {
                // 6. Reset loading state
                this.loading = false;
            }
            // 3. Set success message
            // 4. Redirect to dashboard
            // 5. Handle error
            // 6. Reset loading state
        },

        async createTicketReply(code, payload) {
            this.loading = true;

            try {
                const response = await axiosInstance.post(`ticket-reply/${code}`, payload);
                this.success = response.data.message;
                return response.data.data;
            } catch (error) {
                this.error = handleError(error);
            }
            finally {
                this.loading = false;
            }
        },
    }
})