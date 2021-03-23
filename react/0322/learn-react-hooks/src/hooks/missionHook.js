import React, { useState } from 'react'

export function useMissionState() {
  const [state, setState] = useState(() => ({
      loading: false,
      data: null,
      error: null,
    })
  );

  const { loading, data, error } = state;

  return [loading, data, error];
}