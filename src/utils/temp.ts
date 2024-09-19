// utils.ts
const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date: Date): Array<string> => {
  const result: Array<string> = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

export const submitAPI = async (formData: { date: string; time: string; guests: number; occasion: string }): Promise<boolean> => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.ok;
  } catch (error) {
    console.error('Submission error:', error);
    return false;
  }
};

type State = { times: string[] };
type Action = { type: string; date: Date };

export const updateTimes = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = (): State => {
  const today = new Date();
  return { times: fetchAPI(today) };
};
