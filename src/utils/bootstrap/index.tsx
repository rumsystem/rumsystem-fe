import './mobxConfigure';

if (process.env.NODE_ENV === 'development') {
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    isDisabled: true,
  };
}
