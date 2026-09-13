<template>
    <div class="site-page">
        <header class="site-header">
            <div class="site-header__inner container-wide">
                <a
                    class="site-name"
                    :class="{ 'is-active': activeSection === 'intro' }"
                    href="#top"
                    @click.prevent="handleNavClick('intro')"
                >Juan F. López Luna</a>
                <button
                    class="site-menu-toggle"
                    :class="{ 'is-open': mobileMenuOpen }"
                    type="button"
                    :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
                    aria-controls="site-navigation"
                    :aria-label="mobileMenuOpen ? 'Close navigation' : 'Open navigation'"
                    @click="mobileMenuOpen = !mobileMenuOpen"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav id="site-navigation" class="site-nav" :class="{ 'is-open': mobileMenuOpen }" aria-label="Primary navigation">
                    <a :class="{ 'is-active': activeSection === 'work' }" href="#work" @click.prevent="handleNavClick('work')">Research &amp; engineering</a>
                    <a :class="{ 'is-active': activeSection === 'systems' }" href="#systems" @click.prevent="handleNavClick('systems')">Additional work</a>
                    <a :class="{ 'is-active': activeSection === 'outputs' }" href="#outputs" @click.prevent="handleNavClick('outputs')">Publications</a>
                    <span class="site-nav__social" aria-label="Professional profiles">
                        <a
                            href="mailto:lunaj@seas.upenn.edu"
                            aria-label="Email Juan"
                            title="Email"
                            @click="mobileMenuOpen = false"
                        ><fa :icon="['fas', 'envelope']" /></a>
                        <a
                            href="https://www.linkedin.com/in/juanloluna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            title="LinkedIn"
                            @click="mobileMenuOpen = false"
                        ><fa :icon="['fab', 'linkedin']" /></a>
                        <a
                            href="https://github.com/JuanLoLuna"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            title="GitHub"
                            @click="mobileMenuOpen = false"
                        ><fa :icon="['fab', 'github']" /></a>
                    </span>
                </nav>
            </div>
        </header>

        <main id="top">
            <section id="intro" class="research-hero container-wide" data-nav-section>
                <div class="research-hero__main">
                    <p class="eyebrow">PhD Researcher in Bioengineering at Penn · MS in Electrical Engineering</p>
                    <nav class="hero-social" aria-label="Professional profiles">
                        <a href="mailto:lunaj@seas.upenn.edu" aria-label="Email Juan" title="Email"><fa :icon="['fas', 'envelope']" /></a>
                        <a href="https://www.linkedin.com/in/juanloluna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><fa :icon="['fab', 'linkedin']" /></a>
                        <a href="https://github.com/JuanLoLuna" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub"><fa :icon="['fab', 'github']" /></a>
                    </nav>
                    <h1>Juan F. López Luna</h1>
                    <div class="research-introduction">
                        <p class="research-introduction__lead">
                            I design integrated systems that combine biosignal acquisition, machine learning, hardware, software, and experimental validation.
                        </p>
                        <p class="research-introduction__support">
                            My work ranges from translational research in wearable health at the University of Pennsylvania and neuroscience instrumentation at Princeton University to connected devices and production healthcare software.
                        </p>
                    </div>
                    <a class="text-link" href="#work">Selected work ↓</a>
                </div>
                <figure class="headshot">
                    <img
                        :src="require('../assets/images/headshot-2024.jpg')"
                        alt="Portrait of Juan F. López Luna"
                    >
                </figure>
            </section>

            <section id="work" class="research-section container-wide" data-nav-section>
                <header class="section-heading">
                    <span>01</span>
                    <h2>Selected research &amp; engineering</h2>
                </header>

                <article id="smart-sleeve" class="flagship-project flagship-project--compact">
                    <div class="project-visuals">
                        <figure class="research-figure research-figure--compact">
                            <button
                                class="research-figure__button"
                                type="button"
                                aria-label="Open Smart Sleeve project gallery"
                                @click="openGallery('smartSleeve', 0)"
                            >
                                <img
                                    :src="require('../assets/images/smart-sleeve-laptop.jpg')"
                                    alt="Smart Sleeve wearable acquisition hardware beside a laptop displaying recorded signals"
                                >
                            </button>
                        </figure>
                        <div class="project-gallery-shell">
                            <button class="project-gallery__nav" type="button" aria-label="Show previous Smart Sleeve thumbnails" @click="shiftProjectGallery('smartSleeve', -1)">←</button>
                            <div class="project-gallery project-gallery--flagship" aria-label="Smart Sleeve project images">
                                <button
                                    v-for="image in smartSleeveThumbnails"
                                    :key="image.src"
                                    type="button"
                                    :aria-label="`Open Smart Sleeve image ${image.galleryIndex + 1}: ${image.caption}`"
                                    @click="openGallery('smartSleeve', image.galleryIndex)"
                                >
                                    <img :src="image.src" :alt="image.alt">
                                </button>
                            </div>
                            <button class="project-gallery__nav" type="button" aria-label="Show next Smart Sleeve thumbnails" @click="shiftProjectGallery('smartSleeve', 1)">→</button>
                        </div>
                    </div>
                    <div class="flagship-project__content">
                        <p class="eyebrow">Wearable research platform</p>
                        <h3>Smart Sleeve</h3>
                        <p class="project-summary">
                            Smart Sleeve is a wearable sensing research platform exploring physiological signals and behavioral patterns in neuropsychiatric disorders.
                        </p>
                        <p class="project-affiliation">
                            Doctoral research co-advised by
                            <a href="https://www.med.upenn.edu/pesaran-lab/" target="_blank" rel="noopener noreferrer">Bijan Pesaran</a>
                            and
                            <a href="https://vitalelab.med.upenn.edu/" target="_blank" rel="noopener noreferrer">Flavia Vitale</a>.
                        </p>

                        <div class="related-outputs">
                            <p class="related-outputs__heading">Related presentations</p>
                            <ul class="related-outputs__list">
                                <li>
                                    <span>Oral presentation</span>
                                    <div>
                                        <strong>Development and initial testing of a wearable to detect compulsions from electromyography (EMG)</strong>
                                        <small>Biomedical Engineering Society Annual Meeting · Baltimore · 2024</small>
                                    </div>
                                </li>
                                <li>
                                    <span>Poster presentation</span>
                                    <div>
                                        <strong>Compulsions detection with MXene-based surface electromyography (sEMG).</strong>
                                        <small>3rd International MXene Conference · Drexel University · Philadelphia · August 2024</small>
                                    </div>
                                </li>
                                <li>
                                    <span>International showcase</span>
                                    <div>
                                        <a href="https://prototypesforhumanity.com/prototypes/smart-sleeve" target="_blank" rel="noopener noreferrer"><strong>View the Smart Sleeve project ↗</strong></a>
                                        <small>Prototypes for Humanity · Dubai, UAE · 2024</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article id="princeton-vr" class="flagship-project flagship-project--bordered flagship-project--compact">
                    <div class="project-visuals">
                        <figure class="research-figure research-figure--compact research-figure--cad">
                            <button
                                class="research-figure__button"
                                type="button"
                                aria-label="Open Princeton instrumentation project gallery"
                                @click="openGallery('princeton', 0)"
                            >
                                <img
                                    :src="require('../assets/images/princeton-vr-rig-cad.png')"
                                    alt="CAD overview of a Princeton virtual-reality experimental rig"
                                >
                            </button>
                        </figure>
                        <div class="project-gallery-shell">
                            <button class="project-gallery__nav" type="button" aria-label="Show previous Princeton thumbnails" @click="shiftProjectGallery('princeton', -1)">←</button>
                            <div class="project-gallery project-gallery--flagship" aria-label="Princeton instrumentation project images">
                                <button
                                    v-for="image in visiblePrincetonGallery"
                                    :key="image.src"
                                    type="button"
                                    :aria-label="`Open Princeton project image ${image.galleryIndex + 1}: ${image.caption}`"
                                    @click="openGallery('princeton', image.galleryIndex)"
                                >
                                    <img :src="image.src" :alt="image.alt">
                                </button>
                            </div>
                            <button class="project-gallery__nav" type="button" aria-label="Show next Princeton thumbnails" @click="shiftProjectGallery('princeton', 1)">→</button>
                        </div>
                    </div>
                    <div class="flagship-project__content">
                        <p class="eyebrow">Experimental instrumentation</p>
                        <h3>Princeton virtual-reality systems</h3>
                        <p class="project-summary">
                            At Princeton Neuroscience Institute, I designed, built, maintained, and documented virtual-reality rigs used for decision-making studies in mice.
                        </p>
                        <p class="project-affiliation">
                            <a href="https://braincogs.github.io" target="_blank" rel="noopener noreferrer">View the BRAIN CoGS build and maintenance documentation ↗</a>
                        </p>

                        <div class="project-highlights">
                            <section class="project-highlight">
                                <p class="project-highlight__label">End-to-end hardware</p>
                                <div>
                                    <h4>Rig platform and custom control</h4>
                                    <p>
                                        My work spanned the full platform: control electronics, airflow delivery, mechanical components, system integration, installation, maintenance, and documentation. For the custom control module, I went from breadboard testing through circuit and PCB design, enclosure CAD, assembly, validation, pilot use, and deployment, assembling around 20 boards. I built 12 behavioral rigs, completed two Neuropixels/electrophysiology installations, and supported the integration of two imaging rigs.
                                    </p>
                                    <a href="https://braincogs.github.io/building/control.html" target="_blank" rel="noopener noreferrer">Control module build documentation ↗</a>
                                </div>
                            </section>
                            <section class="project-highlight">
                                <p class="project-highlight__label">Instrumentation + ML</p>
                                <div>
                                    <h4>Pupillometry pipeline</h4>
                                    <p>
                                        I built and validated the pupillometry instrumentation, implemented and evaluated deep-learning models for markerless pupil-size estimation, and worked with the software developer to deploy the workflow into the existing behavioral pipeline.
                                    </p>
                                    <a href="https://braincogs.github.io/software/pupillometry_guide.html" target="_blank" rel="noopener noreferrer">Pupillometry pipeline documentation ↗</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </section>

            <section id="systems" class="research-section container-wide" data-nav-section>
                <header class="section-heading">
                    <span>02</span>
                    <h2>Additional work</h2>
                </header>
                <ul class="project-list">
                    <li>
                        <h3>LoRaWAN / GPS tracker</h3>
                        <div class="project-list__details">
                            <p>I assembled and programmed low-power GPS trackers, administered the LoRaWAN network, created the management interface, and supported pilot deployments.</p>
                            <div class="project-gallery" aria-label="LoRaWAN and GPS tracker project photos">
                                <button
                                    v-for="(image, index) in loraGallery"
                                    :key="image.src"
                                    type="button"
                                    :aria-label="`Open project photo ${index + 1}: ${image.caption}`"
                                    @click="openGallery('lora', index)"
                                >
                                    <img :src="image.src" :alt="image.alt">
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>Microwave ablation antenna</h3>
                        <p>My MS research combined microwave antenna design, computational modeling, fabrication, and tissue-phantom validation to optimize energy delivery for breast cancer applications.</p>
                    </li>
                    <li>
                        <h3>Healthcare operations platform</h3>
                        <p>I developed a web-based platform coordinating customized intravenous nutrition and cancer therapies from order entry through preparation, verification, dispatch, transport, and receipt, with traceability and rule-based safety checks.</p>
                    </li>
                </ul>
            </section>

            <section id="outputs" class="research-section container-wide" data-nav-section>
                <header class="section-heading">
                    <span>03</span>
                    <h2>Selected publications &amp; preprints</h2>
                </header>
                <div class="outputs-layout">
                    <ul class="outputs-list">
                        <li>
                            <span>Publication</span>
                            <div>
                                <a href="https://www.nature.com/articles/s41586-025-08828-z" target="_blank" rel="noopener noreferrer"><strong>A neural mechanism for learning from delayed postingestive feedback ↗</strong></a>
                                <small>Nature · 2025 · Behavioral equipment design and manufacturing</small>
                            </div>
                        </li>
                        <li>
                            <span>Preprint</span>
                            <div>
                                <a href="https://www.biorxiv.org/content/10.1101/2025.07.29.667406v1.full" target="_blank" rel="noopener noreferrer"><strong>Striatal pathways oppositely shift cortical activity along the decision axis ↗</strong></a>
                                <small>bioRxiv · 2025</small>
                            </div>
                        </li>
                        <li>
                            <span>Publication</span>
                            <div>
                                <a :href="require('../assets/documents/PAHCE_Phantom.pdf')" target="_blank" rel="noopener noreferrer"><strong>Development of a fabrication method for a phantom emulating breast tumor tissue for percutaneous antenna coupling measurements in microwave thermotherapy ↗</strong></a>
                                <small>PAHCE · IEEE · 2015</small>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        <footer class="site-footer container-wide">
            <span>Juan F. López Luna</span>
            <nav aria-label="External links">
                <a href="mailto:lunaj@seas.upenn.edu">Email</a>
                <a href="https://www.linkedin.com/in/juanloluna/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/JuanLoLuna" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
        </footer>

        <div
            v-if="activeGalleryImage"
            class="gallery-modal"
            role="dialog"
            aria-modal="true"
            :aria-label="activeGalleryLabel"
            @click.self="closeGallery"
        >
            <button class="gallery-modal__close" type="button" aria-label="Close gallery" @click="closeGallery">×</button>
            <button class="gallery-modal__previous" type="button" aria-label="Previous photo" @click="previousGallery">←</button>
            <figure class="gallery-modal__figure">
                <img
                    :class="{ 'gallery-modal__image--white': activeGalleryKey === 'princeton' && activeGalleryIndex === 0 }"
                    :src="activeGalleryImage.src"
                    :alt="activeGalleryImage.alt"
                >
                <figcaption>
                    <span>{{ activeGalleryImage.caption }}</span>
                    <small>{{ (activeGalleryIndex || 0) + 1 }} / {{ activeGallery.length }}</small>
                </figcaption>
            </figure>
            <button class="gallery-modal__next" type="button" aria-label="Next photo" @click="nextGallery">→</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
    activeSection = 'intro'

    mobileMenuOpen = false

    activeGalleryKey: 'smartSleeve' | 'princeton' | 'lora' | null = null

    activeGalleryIndex: number | null = null

    smartSleeveThumbnailOffset = 0

    princetonThumbnailOffset = 0

    smartSleeveGallery = [
        {
            src: require('../assets/images/smart-sleeve-laptop.jpg'),
            alt: 'Smart Sleeve wearable acquisition hardware beside a laptop displaying recorded signals',
            caption: 'Smart Sleeve acquisition setup'
        },
        {
            src: require('../assets/images/smart-sleeve-cover.jpg'),
            alt: 'Rendering of the Smart Sleeve electrode array and electronics',
            caption: 'Smart Sleeve wearable sensing platform'
        },
        {
            src: require('../assets/images/smart-sleeve-array-closeup.jpg'),
            alt: 'Close-up of the flexible electrode array held between two hands',
            caption: 'Flexible electrode-array close-up'
        },
        {
            src: require('../assets/images/smart-sleeve-architecture.jpg'),
            alt: 'Exploded rendering of the flexible electrode array and acquisition electronics',
            caption: 'Flexible sensing-array architecture'
        },
        {
            src: require('../assets/images/smart-sleeve-flexible-array.jpg'),
            alt: 'Flexible electrode array being fitted over the hand and wrist',
            caption: 'Flexible electrode array prototype'
        }
    ]

    princetonGallery = [
        {
            src: require('../assets/images/princeton-vr-rig-cad.png'),
            alt: 'CAD overview of a Princeton virtual-reality experimental rig',
            caption: 'Virtual-reality rig platform'
        },
        {
            src: require('../assets/images/princeton-control-pcb-render.jpg'),
            alt: 'Rendered component layout of the custom solenoid-driver PCB',
            caption: 'Custom control-board design'
        },
        {
            src: require('../assets/images/princeton-control-pcb.jpg'),
            alt: 'Custom control circuit board during benchtop assembly',
            caption: 'Custom control-board assembly'
        },
        {
            src: require('../assets/images/princeton-control-assembly.jpg'),
            alt: 'Custom solenoid-driver PCB being fitted into its modular enclosure',
            caption: 'Control-board enclosure integration'
        },
        {
            src: require('../assets/images/princeton-positioning.jpg'),
            alt: 'Mechanical drawing explaining the motorized positioning system and adjustment axes',
            caption: 'Motorized positioning system'
        },
        {
            src: require('../assets/images/princeton-projection.jpg'),
            alt: 'Projection surface and rig hardware illuminated during visual-alignment calibration',
            caption: 'Visual projection alignment'
        }
    ]

    loraGallery = [
        {
            src: require('../assets/images/lora-tracker-pcb.jpg'),
            alt: 'Unassembled circular tracker PCB held in one hand',
            caption: 'Tracker PCB before component assembly'
        },
        {
            src: require('../assets/images/lora-tracker-boards.jpg'),
            alt: 'Multiple assembled circular GPS tracker boards',
            caption: 'Assembled low-power tracker boards'
        },
        {
            src: require('../assets/images/lora-tower-deployment.jpg'),
            alt: 'Telecommunications tower used for the pilot deployment',
            caption: 'Pilot deployment site'
        },
        {
            src: require('../assets/images/lora-field-deployment.jpg'),
            alt: 'Weatherproof network enclosure installed on a telecommunications tower',
            caption: 'Pilot network infrastructure deployment'
        }
    ]

    get activeGallery() {
        if (this.activeGalleryKey === 'smartSleeve') return this.smartSleeveGallery
        if (this.activeGalleryKey === 'princeton') return this.princetonGallery
        if (this.activeGalleryKey === 'lora') return this.loraGallery
        return []
    }

    get smartSleeveThumbnails() {
        const images = this.smartSleeveGallery.slice(1)
        return Array.from({ length: Math.min(3, images.length) }, (_, index) => {
            const galleryIndex = ((this.smartSleeveThumbnailOffset + index) % images.length) + 1
            return { ...this.smartSleeveGallery[galleryIndex], galleryIndex }
        })
    }

    get visiblePrincetonGallery() {
        const images = this.princetonGallery.slice(1)
        return Array.from({ length: Math.min(3, images.length) }, (_, index) => {
            const galleryIndex = ((this.princetonThumbnailOffset + index) % images.length) + 1
            return { ...this.princetonGallery[galleryIndex], galleryIndex }
        })
    }

    get activeGalleryLabel() {
        if (this.activeGalleryKey === 'smartSleeve') return 'Smart Sleeve project gallery'
        if (this.activeGalleryKey === 'princeton') return 'Princeton instrumentation project gallery'
        return 'LoRaWAN and GPS tracker project gallery'
    }

    get activeGalleryImage() {
        if (this.activeGalleryIndex === null) return null
        return this.activeGallery[this.activeGalleryIndex]
    }

    private ticking = false

    handleNavClick(section: string) {
        this.activeSection = section
        this.mobileMenuOpen = false

        const targetId = section === 'intro' ? 'top' : section
        const target = document.getElementById(targetId)
        if (!target) return

        const header = document.querySelector<HTMLElement>('.site-header')
        const headerOffset = (header?.offsetHeight || 0) + 8
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset
        window.history.pushState(null, '', `#${targetId}`)
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
    }

    mounted() {
        window.addEventListener('scroll', this.queueSectionUpdate, { passive: true })
        window.addEventListener('resize', this.queueSectionUpdate)
        window.addEventListener('keydown', this.handleGalleryKeydown)
        this.updateActiveSection()
    }

    beforeDestroy() {
        window.removeEventListener('scroll', this.queueSectionUpdate)
        window.removeEventListener('resize', this.queueSectionUpdate)
        window.removeEventListener('keydown', this.handleGalleryKeydown)
        document.body.classList.remove('gallery-is-open')
    }

    openGallery(gallery: 'smartSleeve' | 'princeton' | 'lora', index: number) {
        this.activeGalleryKey = gallery
        this.activeGalleryIndex = index
        document.body.classList.add('gallery-is-open')
    }

    closeGallery() {
        this.activeGalleryKey = null
        this.activeGalleryIndex = null
        document.body.classList.remove('gallery-is-open')
    }

    previousGallery() {
        if (this.activeGalleryIndex === null) return
        this.activeGalleryIndex = (this.activeGalleryIndex - 1 + this.activeGallery.length) % this.activeGallery.length
    }

    nextGallery() {
        if (this.activeGalleryIndex === null) return
        this.activeGalleryIndex = (this.activeGalleryIndex + 1) % this.activeGallery.length
    }

    shiftProjectGallery(gallery: 'smartSleeve' | 'princeton', direction: number) {
        const imageCount = gallery === 'smartSleeve'
            ? this.smartSleeveGallery.length - 1
            : this.princetonGallery.length - 1

        if (gallery === 'smartSleeve') {
            this.smartSleeveThumbnailOffset = (this.smartSleeveThumbnailOffset + direction + imageCount) % imageCount
            return
        }

        this.princetonThumbnailOffset = (this.princetonThumbnailOffset + direction + imageCount) % imageCount
    }

    private handleGalleryKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') this.mobileMenuOpen = false
        if (this.activeGalleryIndex === null) return

        if (event.key === 'Escape') this.closeGallery()
        if (event.key === 'ArrowLeft') this.previousGallery()
        if (event.key === 'ArrowRight') this.nextGallery()
    }

    private queueSectionUpdate() {
        if (this.ticking) return

        this.ticking = true
        window.requestAnimationFrame(() => {
            this.updateActiveSection()
            this.ticking = false
        })
    }

    private updateActiveSection() {
        if (window.innerWidth > 760) this.mobileMenuOpen = false

        const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-section]'))
        const headerOffset = 112
        let currentSection = sections[0]?.id || 'intro'

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            this.activeSection = sections[sections.length - 1]?.id || currentSection
            return
        }

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= headerOffset) {
                currentSection = section.id
            }
        })

        this.activeSection = currentSection
    }
}
</script>
