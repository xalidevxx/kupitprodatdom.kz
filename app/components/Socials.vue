<template>
	<div class="socials">
		<v-btn
			density="comfortable"
			icon="mdi-instagram"
			style="
				background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);
				color: #fff;
			"
			href="https://instagram.com/kupitprodatdom"
			target="_blank"
		/>
		<v-btn
			density="comfortable"
			icon
			color="#000"
			href="https://www.tiktok.com/@kupit_prodat_dom"
			target="_blank"
		>
			<template #default>
				<svg
					width="18"
					height="20"
					viewBox="0 0 18 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18 4.84268V8.28984C17.3742 8.231 16.561 8.09415 15.6615 7.77693C14.4869 7.3625 13.6126 6.79586 13.0399 6.35712V13.3244L13.0253 13.3026C13.0346 13.4408 13.0399 13.5815 13.0399 13.7235C13.0399 17.1834 10.1154 20 6.51997 20C2.92449 20 0 17.1834 0 13.7235C0 10.2635 2.92449 7.44564 6.51997 7.44564C6.87207 7.44564 7.21754 7.4725 7.55504 7.52494V10.9222C7.23083 10.8109 6.8827 10.7508 6.51997 10.7508C4.81789 10.7508 3.43205 12.0837 3.43205 13.7235C3.43205 15.3633 4.81789 16.6961 6.51997 16.6961C8.22204 16.6961 9.60788 15.362 9.60788 13.7235C9.60788 13.6621 9.60656 13.6007 9.60257 13.5393V0H13.1808C13.1941 0.291635 13.206 0.585833 13.2193 0.877468C13.2432 1.45178 13.4558 2.00307 13.8265 2.45459C14.261 2.98542 14.9028 3.60194 15.8036 4.0944C16.6474 4.55359 17.4393 4.75185 18 4.84523V4.84268Z"
						fill="white"
					/>
				</svg>
			</template>
		</v-btn>
		<v-btn
			density="comfortable"
			icon="mdi-whatsapp"
			color="success"
			href="https://wa.me/77073541561"
			target="_blank"
		/>
	</div>
</template>

<style scoped>
.socials {
	display: flex;
	align-items: center;
	gap: 16px;
}
</style>
