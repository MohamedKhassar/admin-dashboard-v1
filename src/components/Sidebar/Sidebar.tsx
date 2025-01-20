import AccountToggle from "./AccountToggle"
import Plan from "./Plan"
import RouteSelect from "./RouteSelect"
import Search from "./Search"

const Sidebar = () => {
    return (
        <div>
            <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
                {/* Main Sidebar content */}
                <AccountToggle />
                <Search />
                <RouteSelect />
            </div>
            {/* plan toggle  */}
            <Plan />
        </div>
    )
}

export default Sidebar