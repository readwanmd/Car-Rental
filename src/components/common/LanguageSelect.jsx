import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const LanguageSelect = () => {
	const { control, watch } = useForm();
	const selectedLanguage = watch('language');

	React.useEffect(() => {
		if (selectedLanguage) {
			console.log(selectedLanguage);
		}
	}, [selectedLanguage]);

	return (
		<form className="form-container">
			{/* <label htmlFor="language">Language</label> */}
			<Controller
				name="language"
				control={control}
				defaultValue="en"
				render={({ field }) => (
					<select id="language" {...field} className="">
						<option value="en">English</option>
						<option value="ar">Arabic</option>
						<option value="fr">French</option>
					</select>
				)}
			/>
		</form>
	);
};

export default LanguageSelect;
