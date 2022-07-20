// Made With Love By Mohamad Mahdi Tasha In Neovim
// Fetching Api For Third Section
fetch('https://api.github.com/users/MohamadMahdi-Tasha/repos?sort=date')
	.then(result => result.json())
	.then(result => {
		// Slicing Returned Result To fifth Of The (it Shows 5 repos);
		const firstThreeRepos = result.slice(0,5);
		// Removing Its Skeletons
		skeltonParentOfThirdSection.forEach(skelton => skelton.remove());

		firstThreeRepos.forEach(repo => {
			// Creating Elements
			const li = document.createElement('li');
			const leftSide = document.createElement('a');
			const leftSideInitSpan = document.createElement('span');
			const rightSide = document.createElement('div');
			const title = document.createElement('h1');
			const paragraph = document.createElement('p');	
			const tagsHolder = document.createElement('ul');
			const leftSideIcon = document.createElement('i');
			const leftSideSpanInSpan = document.createElement('span');

			// Adding Attrs To Created Elements
			li.className = 'w-100 d-inline-flex align-items-center gap-5 recent-repo';
			leftSide.className = 'recent-works-left-side w-50 d-flex align-items-end fs-4 p-4 transition';
			leftSide.style.backgroundColor = getRandomColor();
			leftSideInitSpan.className = 'opacity-0 transition text-white'
			rightSide.className = 'w-50';
			title.className = 'text-dark my-fw-extra-bold mb-5';
			paragraph.className = 'fs-5 text-dark my-fw-regular';
			tagsHolder.className = 'list-unstyled d-flex flex-wrap w-100 gap-2';
			leftSideIcon.className = 'bi bi-arrow-up-right-circle mr-1';
			leftSideSpanInSpan.textContent = 'See Projects';

			// Changin Content Of Created Elements To Returned Result From Api
			title.textContent = repo.name;
			paragraph.textContent = repo.description;
			leftSide.href = `https://www.github.com/MohamadMahdi-Tasha/${repo.name}`;

			// Creating Tags For Each Tags Returned In Api
			repo.topics.forEach(topic => {
				// Creating Elements
				const tagLink = document.createElement('a');
				const tag = document.createElement('li');
				const tagButton = document.createElement('button');

				// Adding Attritubes To Them
				tagLink.href = `https://www.github.com/topics/${topic}`;
				tagLink.target = '_blank';
				tagButton.className = 'p-2 fs-6 rounded-pill border-dark bg-transparent text-dark hover-bg-dark hover-text-light transition';

				// Changing Contents
				tagButton.textContent = topic;

				// Appending Child To Their Parents
				tagLink.appendChild(tagButton);
				tag.appendChild(tagLink);
				tagsHolder.appendChild(tag);
			})

			// Appending Child To Their Parents
			li.appendChild(leftSide);
			leftSide.appendChild(leftSideInitSpan);
			li.appendChild(rightSide);
			rightSide.appendChild(title);
			rightSide.appendChild(paragraph);
			rightSide.appendChild(tagsHolder);
			leftSideInitSpan.appendChild(leftSideIcon);
			leftSideInitSpan.appendChild(leftSideSpanInSpan);
			recentWorks.appendChild(li);
		})
	})
