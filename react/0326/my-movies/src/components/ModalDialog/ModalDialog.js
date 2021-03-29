import { Component, createContext, useContext, useReducer } from 'react'
import Dialog from './ModalDialog.styled'

const DialogContext = createContext();

const initState = {
  hasModal: true,
  isShow: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    
  }
}

export default function ModalDialog({ config = {}, children, ...restProps }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initState,
    ...config
  });

  return (
    <DialogContext.Provider value={{
      state,
      dispatch
    }}>
      <Dialog {...restProps}>{children}</Dialog>
    </DialogContext.Provider>
  )
}

ModalDialog.Header = (children) => {
  return (
    <DialogContext.Consumer>
      {({ state, dispatch }) => {
        <Dialog.Header>
          {children}
        </Dialog.Header>
      }}
    </DialogContext.Consumer>
  )
};

ModalDialog.Body = class extends Component {
  static contextType = DialogContext;
  render() {
    return (
      // this.context => {state, dispatch}
      <Dialog.Body>
        {this.props.children}
      </Dialog.Body>
    )
  }
}

ModalDialog.Footer = ({children}) => {
  const { state, dispatch } = useContext(DialogContext);
  
  return (
    <Dialog.Footer>
      {children}
    </Dialog.Footer>
  )
};

export const signOutAction = () => ({
  type: SIGN_OUT
})