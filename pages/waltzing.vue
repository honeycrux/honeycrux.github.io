<script setup>
import { versions, parts } from "assets/data/waltzing";
</script>

<template>
  <div class="page-waltzing">
    <PageTop title="The Waltzing Cat Version Tracker" />
    <div class="-mt-8">
      <Infobar>
        <Accordion title="About">
          <div class="my-4">
            <div class="text-xl font-bold mb-2">
              The score release problem
            </div>
            <div>
              Imagine a situation where you have a score full of your own scribbles and markings. And then you are told there is a new version of the score.
              You do the dilligence in checking the difference. Then, you either copy your markings to the new version, or, if changes are minor, copy those to the new version.
              Some rehearsals later, you receive yet another new version.
              You don't want to check anymore...
            </div>
          </div>
          <div class="my-4">
            <div class="text-xl font-bold mb-2">
              How to use
            </div>
            <div>
              This page keeps track of changes between versions of the score. Version names are marked at the bottom of each page of the score.
              If you are using a version that is not the most recent, follow these steps:
              <ol class="list-decimal ml-6">
                <li>Find your version below. Your part is marked with either a <span class="font-bold">tick</span> or a <span class="font-bold">cross</span>:</li>
                <li>
                  A part with a <span class="font-bold">tick (<Icon name="lets-icons:check-fill" color="green" size="20" />)</span> has no major change up to the most recent version.
                  There might be minor changes, but not involving note changes.
                  Your score is still valid.
                </li>
                <li>
                  A part with a <span class="font-bold">cross (<Icon name="lets-icons:dell-fill" color="#d33" size="20" />)</span> has undergone some major changes in later versions.
                  Your score is invalidated.
                </li>
                <li>In both cases, you can scroll up to review all major and minor changes from newer versions and perform necessary actions to play correctly.</li>
              </ol>
            </div>
          </div>
        </Accordion>
      </Infobar>
      <Infobar v-for="version in versions" :key="version.name">
        <div class="font-bold text-xl mt-4 mb-2">
          Version {{ version.name }}
        </div>
        <div class="mb-4">
          <ScoreStatus
            v-for="part in parts" :key="part.name"
            :name="part.name"
            :valid="version.breakdown[part.id].valid"
            :major="version.breakdown[part.id].major"
            :minor="version.breakdown[part.id].minor"
          />
        </div>
      </Infobar>
    </div>
  </div>
</template>