import {expect} from 'chai';
import gulpReactCssUsage from '../dist/index.js';


describe('index', () => {

	describe('health check', () => {

		it('plug-in does exist', () => {
			expect(gulpReactCssUsage).to.exist;
		});

		it('plug-in is a function', () => {
			expect(gulpReactCssUsage).to.be.a('function');
		});

	});

});
