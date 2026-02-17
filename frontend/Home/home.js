   
        // Navigation
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all nav links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Add active class to clicked nav link
            event.target.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }

        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        // Interest Selection
        let selectedInterests = [];

        function toggleInterest(element) {
            element.classList.toggle('selected');
            const interest = element.textContent.trim();
            
            if (selectedInterests.includes(interest)) {
                selectedInterests = selectedInterests.filter(i => i !== interest);
            } else {
                selectedInterests.push(interest);
            }
        }

        // Match Finding Algorithm
        function findMatch() {
            if (selectedInterests.length === 0) {
                alert('Please select at least one interest!');
                return;
            }

            const matches = {
                '🎨 Arts & Creativity': { committee: 'Culture Committee', description: 'Perfect for expressing your creative side!' },
                '⚽ Sports & Fitness': { committee: 'Sports Committee', description: 'Great choice for staying active and healthy!' },
                '📚 Academic Excellence': { committee: 'Academic Committee', description: 'Ideal for those passionate about learning!' },
                '💻 Technology': { committee: 'Technical Committee', description: 'Perfect for tech enthusiasts and innovators!' },
                '🎉 Event Planning': { committee: 'Events Committee', description: 'Great for organizing amazing experiences!' },
                '📱 Social Media': { committee: 'Media Committee', description: 'Perfect for digital storytellers!' },
                '🤝 Networking': { committee: 'Social Committee', description: 'Ideal for building connections!' },
                '🌍 Environment': { committee: 'Environment Committee', description: 'Perfect for making the world greener!' },
                '💰 Finance & Budget': { committee: 'Finance Committee', description: 'Great for financial management skills!' },
                '✍️ Writing': { committee: 'Media Committee', description: 'Perfect for content creators!' },
                '🎭 Performance': { committee: 'Culture Committee', description: 'Ideal for performers and artists!' },
                '📸 Photography': { committee: 'Media Committee', description: 'Perfect for visual storytellers!' }
            };

            // Find best match based on first selected interest
            const firstInterest = selectedInterests[0];
            const match = matches[firstInterest] || { committee: 'Social Committee', description: 'A great all-around choice!' };

            // Show result
            document.getElementById('matchedCommittee').textContent = match.committee;
            document.getElementById('matchDescription').textContent = match.description;
            document.getElementById('matchResult').classList.add('show');

            // Scroll to result
            document.getElementById('matchResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    