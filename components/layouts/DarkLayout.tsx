import { FC } from 'react';

interface props {
    children: React.ReactNode
}

export const DarkLayout: FC<props> = ( {children} ) => {
    return (
      <div style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: '5px',
          padding: '10px',
      }}>
          <h3>Diseño oscuro</h3>
          <div>
               {children}
          </div>
      </div>
    );
  };