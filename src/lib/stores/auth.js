import { writable } from 'svelte/store';
import { supabase } from './supabase';

const user = writable(null);
const session = writable(null);

export const auth = {
	subscribe: user.subscribe,
	
	// Initialize auth state
	init: async () => {
		const { data: { session }, error } = await supabase.auth.getSession();
		if (error) throw error;
		if (session) {
			user.set(session.user);
		}
	},
	
	// Sign in with email and password
	signIn: async (email, password) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) throw error;
		user.set(data.user);
		return data;
	},
	
	// Sign up with email and password
	signUp: async (email, password) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error) throw error;
		user.set(data.user);
		return data;
	},
	
	// Sign out
	signOut: async () => {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
		user.set(null);
	},
	
	// Reset password
	resetPassword: async (email) => {
		const { error } = await supabase.auth.resetPasswordForEmail(email);
		if (error) throw error;
	},
	
	// Update user profile
	updateProfile: async (updates) => {
		const { data, error } = await supabase.auth.updateUser(updates);
		if (error) throw error;
		user.set(data.user);
		return data;
	}
};
