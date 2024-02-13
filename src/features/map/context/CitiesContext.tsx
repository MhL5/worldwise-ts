import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { City } from "../../../services/postCities";
import { getCities } from "../../../services/getCities";

type CitiesContextType = {
  dispatch: Dispatch<Action>;
  state: typeof initialState;
};

type CitiesProviderType = ({
  children,
}: {
  children: ReactNode;
}) => JSX.Element;

type Action = { type: "updateCities"; payload: City[] };
type ReducerFn = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

// Reducer
const initialState: { cities: City[] } = {
  cities: [],
};

const reducerFn: ReducerFn = function (state, action) {
  switch (action.type) {
    case "updateCities":
      return { ...state, cities: action.payload };

    default:
      return { ...state };
  }
};

// Context
/////////////////////////////////////////////////
/////////////////////////////////////////////////
const CitiesContext = createContext<CitiesContextType | null>(null);

const CitiesProvider: CitiesProviderType = function ({ children }) {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    async function getCitiesFn() {
      const cities = await getCities();
      dispatch({ type: "updateCities", payload: cities });
    }
    getCitiesFn();
  }, []);

  return (
    <CitiesContext.Provider value={{ dispatch, state }}>
      {children}
    </CitiesContext.Provider>
  );
};

function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error(`CitiesContext was called outside of it's provider.🫢`);
  return context;
}

export default CitiesProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useCitiesContext };
