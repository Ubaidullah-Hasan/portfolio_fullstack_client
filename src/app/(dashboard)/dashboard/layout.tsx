import React from 'react';

import { TChildren } from '@/src/types';

const DashboardLayout = ({ children }: TChildren) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DashboardLayout;