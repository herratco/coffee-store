import {version} from "react"
import appVersion from "../../package.json"
import PropTypes from "prop-types"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <h2>React version: {version}</h2>
            <h2>This App version: {appVersion.version}</h2>
        </div>
    )
}
ItemListContainer.propTypes = {
    greeting: PropTypes.string
  };
export default ItemListContainer