import React from 'react'
import {SliderProps} from '@mui/material'
import Slider from '@mui/material/Slider';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                width: '300px',
                height: '5px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: '0.5',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange