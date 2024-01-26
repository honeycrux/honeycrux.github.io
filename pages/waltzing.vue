<script setup>
import { versions, parts } from 'assets/data/waltzing'
</script>

<template>
    <PageTop title="The Waltzing Cat Version Tracker" />
    <div class="-mt-8">
        <Infobar >
            <div class="my-4">
                <div class="text-xl font-bold mb-2">The score release problem</div>
                <div>
                    Imagine a situation where you have a score full of your own scribbles and markings. And then you are told there is a new version of the score.
                    You do the dilligence in checking the difference. Then, you either copy your markings to the new version, or if changes are minor, copy the score changes to the new version.
                    Some rehearsals later, you receive yet another new version.
                    You don't want to check anymore...
                </div>
            </div>
            <div class="my-4">
                <div class="text-xl font-bold mb-2">How to use</div>
                <div>
                    This page keeps track of changes between versions of the score. Version names are marked at the bottom of the score.
                    If you are using a version that is not the most recent, follow these steps:
                    <ol class="list-decimal ml-6">
                        <li>Find your version below.</li>
                        <li>A part that is not majorly changed (i.e. changes that involves playing changes) is marked with a tick. The part is still valid.</li>
                        <li>A part that undergone any major change in later versions is marked with a cross. The part is invalidated.</li>
                        <li>In both cases, you can scroll up to review the major and minor changes for all newer versions and perform necessary actions to play correctly.</li>
                    </ol>
                </div>
            </div>
        </Infobar>
	    <Infobar v-for="revision in versions">
           <div class="font-bold text-xl mt-4 mb-2">Version {{ revision.name }}</div>
           <div class="mb-4">
               <ScoreStatus v-for="part in parts"
                   :name="part.name"
                   :valid="revision.breakdown[part.id].valid"
                   :major="revision.breakdown[part.id].major"
                   :minor="revision.breakdown[part.id].minor"
               />
           </div>
	    </Infobar>
    </div>
</template>