"use client";

import { useSyncExternalStore } from "react";
import { HOTEL_CONFIG } from "./config";

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}

const defaultState: BookingState = {
  checkIn: HOTEL_CONFIG.defaultCheckIn,
  checkOut: HOTEL_CONFIG.defaultCheckOut,
  guests: 2,
  roomType: "Deluxe Room",
};

type Listener = () => void;
let currentState: BookingState = { ...defaultState };
const listeners = new Set<Listener>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const bookingStore = {
  getSnapshot: (): BookingState => currentState,
  getServerSnapshot: (): BookingState => defaultState,
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  set: (update: Partial<BookingState>) => {
    currentState = { ...currentState, ...update };
    emitChange();
  },
  reset: () => {
    currentState = { ...defaultState };
    emitChange();
  },
};

/**
 * Standard React 18/19 hook for subscribing to external state safely
 * without cascading renders or useEffect setState warnings
 */
export function useBookingStore() {
  const state = useSyncExternalStore(
    bookingStore.subscribe,
    bookingStore.getSnapshot,
    bookingStore.getServerSnapshot
  );

  return {
    state,
    setBooking: bookingStore.set,
    resetBooking: bookingStore.reset,
  };
}
