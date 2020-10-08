<template>
    <div>
        <navbar />
        <section class="hero is-dark is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-2">
                        Juan Francisco López Luna
                    </h1>
                    <h2 class="subtitle is-family-secondary">
                        MSc Electrical Engineering
                    </h2>
                </div>
            </div>
        </section>
        <section>
            <div class="mt-large container has-text-left">
                <div class="columns">
                    <div class="column is-narrow mr-6">
                        <figure class="image is-256x256">
                            <img
                                class="is-rounded"
                                :src="require('../assets/images/me.jpeg')"
                            >
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title is-size-2">
                            Who am I?
                        </h1>
                        <p class="is-family-secondary">
                            A MSc in bioelectronics with a strong scientific background and significant entrepreneur experience. Founded a tech company and developed end-to-end projects implementing innovative technologies into both new and old processes exceeding clients expectations. Associate professor of biomedical instrumentation and mentor of research projects in an academic institution. Passionate about research and technological innovation.
                        </p>
                        <br>
                        <p class="is-family-secondary">
                            You can download my CV
                            <a
                                class="has-text-dark"
                                :href="require('../assets/documents/resume_cv.pdf')"
                                download
                            >
                                here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <resume
            class="mb-6"
        />
        <section>
            <div class="mt-large mb-6 container">
                <h1 class="title is-size-2">
                    Publications
                </h1>
                <p class="is-family-secondary">
                    López, J.; Leija, L.; Vera, A., ”Development of fabrication method for a phantom emulating breast tumor tissue for percutaneous antenna coupling measurements in microwave thermotherapy”, Pan American in Health Care Exchanges (PAHCE), 2015, pp.1-4, 23-28 March 2015 availablefor downlad
                    <a
                        class="has-text-dark"
                        :href="require('../assets/documents/PAHCE_Phantom.pdf')"
                        download
                    >
                        here.
                    </a>
                </p>
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <fa icon="atom" />
                <br class="mb-5">
                Juan Francisco López Luna
                <br>
                <small>Associate professor | Consultant</small>
                <br class="mb-5">
                <a
                    href="mailto:jlopez@lasallistas.org.mx"
                    class="has-text-dark"
                >
                    jlopez@lasallistas.org.mx
                </a>
            </div>
        </footer>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import navbar from '~/components/navbar.vue'
import resume from '~/components/resume.vue'

@Component({
    components: {
        navbar,
        resume
    }
})
export default class Settings extends Vue {

}
</script>
