interface UserData {
  name: string;
}

const save = (key: string, value: string | UserData | string[]) => {
  try {
    let serializedState: string;
    if (typeof value === "string") {
      serializedState = value;
    } else if (Array.isArray(value)) {
      serializedState = JSON.stringify(value);
    } else if (typeof value === "object") {
      serializedState = JSON.stringify(value);
    } else {
      throw new Error("Invalid data type. Expected string, array, or object.");
    }
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", (error as Error).message);
  }
};

const load = (key: string): string | UserData | null => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState) {
      if (serializedState.startsWith("{")) {
        return JSON.parse(serializedState) as UserData;
      } else {
        return serializedState;
      }
    }
    return null;
  } catch (error) {
    console.error("Get state error: ", (error as Error).message);
    return null;
  }
};

const remove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove state error: ", (error as Error).message);
  }
};

export default {
  save,
  load,
  remove,
};
