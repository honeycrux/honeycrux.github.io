<script setup>
import { versions, parts } from 'assets/data/waltzing'
</script>

<template>
    <PageTop title="The Waltzing Cat Version Tracker" />
    <div class="-mt-8">
	    <Infobar v-for="revision in versions">
           <div class="font-bold text-xl mt-4 mb-2">Version {{ revision.name }}</div>
           <div class="mb-4">
               <ScoreStatus v-for="part in parts"
                   :name="part.name"
                   :changes="revision.breakdown[part.id].changes"
                   :valid="revision.breakdown[part.id].valid"
               />
           </div>
	    </Infobar>
    </div>
</template>