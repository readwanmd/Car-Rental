import PropTypes from 'prop-types';
const Field = ({
	label,
	icon: Icon,
	children,
	error = null,
	htmlClass = null,
}) => (
	<div className={htmlClass}>
		{label && (
			<label>
				{Icon && (
					<>
						<Icon className="input-icon" />
						&nbsp;
					</>
				)}{' '}
				{label} <b>*</b>
			</label>
		)}
		{children}
		{error && (
			<p role="alert" aria-live="assertive" className="error">
				{error.message}
			</p>
		)}
	</div>
);

Field.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.elementType,
	children: PropTypes.node.isRequired,
	error: PropTypes.shape({
		message: PropTypes.string,
	}),
	htmlClass: PropTypes.string,
};

export default Field;
