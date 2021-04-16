import React, { createContext, Dispatch, useContext, useReducer } from "react";

export const treeviewInitialState = {
  currentPath: "",
};

export type ItemType = "caret" | "nested";
export type Item = { id: string; name: string; children: Item[] };

export type TreeViewState = {
  currentPath: string;
};
export const TreeViewStateContext = createContext<TreeViewState | undefined>(
  undefined
);

/** Dispatch */
export enum TreeViewActionType {
  CURRENT_PATH = "CURRENT_PATH",
}
type Action = { type: TreeViewActionType.CURRENT_PATH; path: string };

type TreeViewDispatch = Dispatch<Action>;
export const TreeViewDispatchContext = createContext<
  TreeViewDispatch | undefined
>(undefined);

/** Reducer */
function treeviewReducer(state: TreeViewState, action: Action): TreeViewState {
  switch (action.type) {
    default:
      throw new Error("Unhandled action");
  }
}

/** Provider */
export function TreeViewContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [treeview, dispatch] = useReducer(
    treeviewReducer,
    treeviewInitialState
  );

  return (
    <TreeViewDispatchContext.Provider value={dispatch}>
      <TreeViewStateContext.Provider value={treeview}>
        {children}
      </TreeViewStateContext.Provider>
    </TreeViewDispatchContext.Provider>
  );
}

/** Validation */
export function useTreeViewState() {
  const state = useContext(TreeViewStateContext);
  if (!state) throw new Error("TreeViewProvider not found");
  return state;
}

export function useTreeViewDispatch() {
  const dispatch = useContext(TreeViewDispatchContext);
  if (!dispatch) throw new Error("TreeViewProvider not found");
  return dispatch;
}
