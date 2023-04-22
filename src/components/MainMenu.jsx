import mainMenuItemsData from "../data/mainMenuItems.json";



const MenuItem = ({ otherData }) => (
    <li>
        <a href={otherData.link}>{otherData.text}</a>
    </li>
);

const MainMenu = () => {
    const friendList = mainMenuItemsData.map(it => <MenuItem key={it.id} otherData={it} />);

    return (
        <ul>
            {friendList}
        </ul>
    );
};


export default MainMenu;