<template>
    <b-navbar
        type="is-dark"
        spaced
    >
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="block">
                    <a
                        href="https://www.linkedin.com/in/juanloluna/"
                        target="_blank"
                        class="has-text-light is-size-3"
                    >
                        <fa :icon="['fab', 'linkedin']" />
                    </a>
                    <a
                        href="https://github.com/JuanLoLuna"
                        target="_blank"
                        class="has-text-light is-size-3 mx-3"
                    >
                        <fa :icon="['fab', 'github-square']" />
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
