/** @param {StatusCardProps} props */
export function StatusCard({ title, message, status }: StatusCardProps): import("react").JSX.Element;
export type StatusCardStatus = "info" | "success" | "warning";
export type StatusCardProps = {
    title: string;
    message: string;
    status?: StatusCardStatus | undefined;
};
