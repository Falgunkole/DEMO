const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
};

async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {})
    },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(errorBody.message || `API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  submitBooking: (payload: { name: string; phone: string; address: string; service: string; preferredDate?: string; notes?: string }) =>
    apiRequest<{ success: boolean; message: string; bookingId: string }>('/api/bookings', {
      method: 'POST',
      body: payload
    }),
  submitContact: (payload: { name: string; phone: string; email: string; message: string }) =>
    apiRequest<{ success: boolean; message: string; contactId: string }>('/api/contact', {
      method: 'POST',
      body: payload
    }),
  getServices: () => apiRequest<{ success: boolean; services: Array<{ id: string; title: string }> }>('/api/services'),
  healthCheck: () => apiRequest<{ success: boolean; status: string }>('/api/health')
};
