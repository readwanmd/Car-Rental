import { useState } from 'react';
import FaqCard from './FaqCard';
import { faqData } from './FaqData';
import FaqTitle from './FaqTitle';

function Faq() {
	const [activeQuestionId, setActiveQuestionId] = useState('');

	const handleToggleQuestion = (id) => {
		setActiveQuestionId((prevId) => (prevId === id ? '' : id));
	};

	return (
		<section className="faq-section">
			<div className="container">
				<div className="faq-content">
					<FaqTitle />
					<div className="all-questions">
						{faqData.map(({ id, question, answer }) => (
							<FaqCard
								key={id}
								id={id}
								question={question}
								answer={answer}
								isActive={activeQuestionId === id}
								onToggle={handleToggleQuestion}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
