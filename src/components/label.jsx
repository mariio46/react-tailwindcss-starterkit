import { cn } from '../lib/utils';

export default function Label({ className, value, children, ...props }) {
    return (
        <label className={cn('text-sm capitalize', className)} {...props}>
            {value ?? children}
        </label>
    );
}
