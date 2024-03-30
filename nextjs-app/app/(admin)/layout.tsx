import "../globals.css";
import SideBarComponent from "@/components/sidebar/SideBarComponent";

export default function AdminLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html lang="en">
            <body className="flex">
                <aside className="h-screen">
                    <SideBarComponent/>
                </aside>
                <main className="flex-grow-1">
                    {children}
                </main>
            </body>
        </html>
    )
}