import { IconChevronDown } from '@tabler/icons-react';

function FaqCard({ id, question, answer, isActive, onToggle }) {
	const questionClassName = isActive
		? 'faq-box__question active-question'
		: 'faq-box__question';
	const answerClassName = isActive
		? 'faq-box__answer active-answer'
		: 'faq-box__answer';

	return (
		<div className="faq-box">
			<div id={id} onClick={() => onToggle(id)} className={questionClassName}>
				<p>{question}</p>
				<IconChevronDown />
			</div>
			<div id={id} className={answerClassName}>
				{answer}
			</div>
		</div>
	);
}

export default FaqCard;
