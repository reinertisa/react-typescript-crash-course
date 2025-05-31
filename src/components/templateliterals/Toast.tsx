/**
 * Position prop can be one of the following:
 * left-center | left-top | left-bottom | center | center-top |
 * center-bottom | right-center | right-top | right-bottom
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    position: Extract<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export default function Toast({position}: ToastProps) {
    return (
        <div>
            Toast notification Position - {position}
        </div>
    )
}