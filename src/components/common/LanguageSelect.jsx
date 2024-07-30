import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
	const { i18n } = useTranslation();
	const { control, setValue } = useForm({
		defaultValues: {
			language: i18n.language || localStorage.getItem('i18nextLng'),
		},
	});

	const selectedLanguage = useRef(i18n.language);

	useEffect(() => {
		setValue('language', i18n.language);
		document.body.dir = i18n.dir();
	}, [i18n.language, setValue, i18n]);

	const handleLanguageChange = (language) => {
		if (selectedLanguage.current !== language) {
			i18n.changeLanguage(language);
			selectedLanguage.current = language;
		}
	};

	return (
		<form className="form-container">
			<Controller
				name="language"
				control={control}
				render={({ field }) => (
					<select
						id="language"
						{...field}
						onChange={(e) => {
							field.onChange(e);
							handleLanguageChange(e.target.value);
						}}
					>
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
