//libraries
import { TypedUseSelectorHook, useSelector } from "react-redux";
//bll
import { RootState } from "bll/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
