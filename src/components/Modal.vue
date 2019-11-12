<template>
    <div class="shw-modal">
        <div class="shw-counter">
            <toggle-button class="shw-toggleBtn" v-if="isMobile" v-model="mobileShuffled"
                :color="{checked: '#01B8B3', unchecked: '#FECD07'}"
                :sync="true"
                :labels="{checked:'Shuffled', unchecked:'Unshuffled'}"
                :width="85"/>
            <div class="shw-textCounter">
                Showing {{ counter }} results ({{ elapsedTime }} seconds)
            </div>
        </div>
        <div class="shw-container shw-justify-center">
            <div>
                <result-row v-if="(isMobile && mobileShuffled) || (!isMobile)" :data="shuffled"></result-row>
            </div>
            <div>
                <result-row v-if="(isMobile && !mobileShuffled) || (!isMobile)" :data="unshuffled"></result-row>
            </div>
        </div>
    </div>
</template>

<script>
import ResultRow from "./ResultRow.vue";
import { ToggleButton } from 'vue-js-toggle-button'

export default {
    props: [
        'data',
        'elapsedTime'
    ],
    data() {
        return {
            mobileShuffled: true
        };
    },
    computed: {
        isMobile() {
            if( screen.width <= 760 ) {
                return true;
            }
            else {
                return false;
            }
        },
        counter() {
            return this.data[0].length;
        },
        unshuffled() {
            return this.data[0];
        },
        shuffled() {
            return this.data[1];
        }
    },
    methods: {
        toggleMobileShuffle() {
            this.mobileShuffled = !this.mobileShuffled;
        }
    },
    components: {
        ResultRow,
        ToggleButton
    }
}
</script>

<style scoped>
.shw-modal {
    margin-right: 15px;
}
.shw-container {
    display: flex;
    flex-direction: row;
}
.shw-justify-center {
    justify-content: center;
}

.shw-toggleBtn{
    float: right;
    margin-right: 50px;
}
.shw-counter {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  color: rgb(128, 128, 128);
  margin-left: 4vw;
}


@media only screen and (max-width: 765px) {
    .shw-toggleBtn{
        margin-right: 5px;
    }
    
    .shw-textCounter{
        padding-top: 5px;
    }
}

@media only screen and (max-width: 424px) {
    .shw-toggleBtn{
        margin-right: 5px;
    }
    
    .shw-modal {
        margin-right: 0px;
    }

}
</style>