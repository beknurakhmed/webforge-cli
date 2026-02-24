import { skills, experience, styles } from '../main';

export function renderAbout(): string {
  return `
    <nav class="${styles.navbar}">
      <div class="${styles.navContainer}">
        <a href="#/" class="${styles.navLogo}">{{projectName}}</a>
        <div class="${styles.navLinks}">
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about" class="active">About</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="${styles.pageHeader}">
        <h1>About Me</h1>
        <p>Learn more about my background, experience, and what drives me as a developer.</p>
      </section>

      <section class="${styles.section}">
        <div class="${styles.aboutGrid}">
          <div class="${styles.aboutAvatarSection}">
            <div class="${styles.aboutAvatar}">👨‍💻</div>
            <h2>{{projectName}}</h2>
            <p class="${styles.aboutSubtitle}">Full Stack Developer</p>
            <div class="${styles.aboutSocial}">
              <a href="#" class="${styles.socialLink}">🐙</a>
              <a href="#" class="${styles.socialLink}">💼</a>
              <a href="#" class="${styles.socialLink}">🐦</a>
              <a href="#" class="${styles.socialLink}">📧</a>
            </div>
          </div>
          <div class="${styles.aboutBio}">
            <h3>My Story</h3>
            <p>I'm a passionate Full Stack Developer with over 5 years of experience building web and mobile applications. I specialize in creating performant, accessible, and visually appealing digital experiences.</p>
            <p>My journey in software development began when I built my first website at age 15. Since then, I've been constantly learning and growing, working with startups and enterprises alike to deliver impactful solutions.</p>
            <p>When I'm not coding, you can find me contributing to open source projects, writing technical articles, or exploring the great outdoors. I believe in continuous learning and sharing knowledge with the community.</p>

            <div class="${styles.aboutDetails}">
              <div class="${styles.detailItem}">
                <span class="${styles.detailLabel}">Location</span>
                <span class="${styles.detailValue}">📍 San Francisco, CA</span>
              </div>
              <div class="${styles.detailItem}">
                <span class="${styles.detailLabel}">Email</span>
                <span class="${styles.detailValue}">📧 hello@developer.com</span>
              </div>
              <div class="${styles.detailItem}">
                <span class="${styles.detailLabel}">Availability</span>
                <span class="${styles.detailValue}">🟢 Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="${styles.section}">
        <h2>Experience</h2>
        <div class="${styles.timeline}">
          ${experience.map((exp, i) => `
            <div class="${styles.timelineItem}">
              <div class="${styles.timelineDot}"></div>
              <div class="${styles.timelineContent}">
                <div class="${styles.timelineHeader}">
                  <h3>${exp.role}</h3>
                  <span class="${styles.timelinePeriod}">${exp.period}</span>
                </div>
                <p class="${styles.timelineCompany}">${exp.company}</p>
                <p class="${styles.timelineDescription}">${exp.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="${styles.section}">
        <h2>Skills & Expertise</h2>
        <div class="${styles.skillsGrid}">
          ${skills.map(s => `
            <div class="${styles.skillCard}">
              <div class="${styles.skillHeader}">
                <span class="${styles.skillIcon}">${s.icon}</span>
                <span class="${styles.skillName}">${s.name}</span>
                <span class="${styles.skillLevel}">${s.level}%</span>
              </div>
              <div class="${styles.skillBar}">
                <div class="${styles.skillFill}" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="${styles.section}">
        <div class="${styles.educationGrid}">
          <div class="${styles.eduCard}">
            <div class="${styles.eduIcon}">🎓</div>
            <h3>B.S. Computer Science</h3>
            <p class="${styles.eduSchool}">University of Technology</p>
            <p class="${styles.eduYear}">2014 - 2018</p>
          </div>
          <div class="${styles.eduCard}">
            <div class="${styles.eduIcon}">📜</div>
            <h3>AWS Certified Developer</h3>
            <p class="${styles.eduSchool}">Amazon Web Services</p>
            <p class="${styles.eduYear}">2021</p>
          </div>
          <div class="${styles.eduCard}">
            <div class="${styles.eduIcon}">📜</div>
            <h3>Google UX Design Certificate</h3>
            <p class="${styles.eduSchool}">Google / Coursera</p>
            <p class="${styles.eduYear}">2022</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="${styles.footer}">
      <div class="${styles.footerContent}">
        <div class="${styles.footerSection}">
          <h4>{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div class="${styles.footerSection}">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="${styles.footerSection}">
          <h4>Connect</h4>
          <a href="#">🐙 GitHub</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </div>
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
