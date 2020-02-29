/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';

export default ({ children, active, ...props }) => {
  const { theme } = useThemeUI();
  return (
    <div
      sx={{
        display: 'inline-block',
        py: 2,
        px: 6,
        fontSize: 2,
        cursor: 'pointer',
        borderBottom: active ? `2px solid ${theme.colors.primary}` : 0
      }}
      {...props}
    >
      {children}
    </div>
  );
};
