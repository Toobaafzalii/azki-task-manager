import * as React from 'react';
import Avatar from '@mui/material/Avatar';

interface AppAvatarProps {
    src: string;
    size?: number;
}

const AppAvatar: React.FC<AppAvatarProps> = ({ src, size=40 }) => {
    return (
        <Avatar
            alt="user-avatar"
            src={src}
            sx={{ 
                width: size, 
                height: size,
            }}
        />
    );
};

export default AppAvatar;