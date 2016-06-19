import React, {PropTypes} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const GenreSelector = ({onChange, genres}) => (
	<DropDownMenu maxHeight={25} onChange={onChange}>
		{genres.map(genre => {
			<MenuItem value={genre.name} key={genre.id} primaryText={genre.name}/>
		})}
	</DropDownMenu>
);

GenreSelector.propTypes = {
	onChange: PropTypes.func.isRequired,
	genres: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired).isRequired
};

export default GenreSelector